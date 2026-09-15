"use client";

import { useEffect, useRef, useState } from "react";
import type { BufferGeometry, Material, Mesh } from "three";

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl")),
    );
  } catch {
    return false;
  }
}

export function HeroCity() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !supportsWebGL()) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let disposed = false;
    let cleanup = () => {};

    async function boot() {
      const THREE = await import("three");
      if (disposed || !mount) return;

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x05080a, 0.021);

      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 220);
      camera.position.set(-2.2, 8.5, 34);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setClearColor(0x030507, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.55));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.92;
      renderer.domElement.className = "hero-webgl-canvas";
      renderer.domElement.setAttribute("aria-hidden", "true");
      mount.appendChild(renderer.domElement);

      const world = new THREE.Group();
      world.rotation.y = -0.055;
      scene.add(world);

      const ambient = new THREE.AmbientLight(0xaed9e6, 0.55);
      const key = new THREE.DirectionalLight(0xe8f8ff, 2.1);
      key.position.set(-8, 22, 24);
      const cyanLight = new THREE.PointLight(0x35dfff, 22, 48, 1.9);
      cyanLight.position.set(8, 13, -8);
      scene.add(ambient, key, cyanLight);

      const facadeMaterial = new THREE.MeshStandardMaterial({
        color: 0x090d10,
        roughness: 0.74,
        metalness: 0.44,
      });
      const facadeFarMaterial = new THREE.MeshStandardMaterial({
        color: 0x07090b,
        roughness: 0.82,
        metalness: 0.28,
      });
      const edgeMaterial = new THREE.LineBasicMaterial({
        color: 0x9ae7ff,
        transparent: true,
        opacity: 0.115,
      });
      const edgeBrightMaterial = new THREE.LineBasicMaterial({
        color: 0x9ae7ff,
        transparent: true,
        opacity: 0.37,
      });
      const cyanMaterial = new THREE.MeshStandardMaterial({
        color: 0x0b1720,
        emissive: 0x33dfff,
        emissiveIntensity: 1.55,
        metalness: 0.62,
        roughness: 0.26,
      });
      const railMaterial = new THREE.MeshStandardMaterial({
        color: 0x071016,
        emissive: 0x0c6d83,
        emissiveIntensity: 0.58,
        metalness: 0.78,
        roughness: 0.24,
      });
      const signalMaterial = new THREE.MeshBasicMaterial({ color: 0xff5d4a });

      let seed = 17;
      const random = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };

      function addEdges(mesh: Mesh, bright = false) {
        const edges = new THREE.LineSegments(
          new THREE.EdgesGeometry(mesh.geometry),
          bright ? edgeBrightMaterial : edgeMaterial,
        );
        mesh.add(edges);
      }

      // Dense but restrained city canyon. Deterministic generation keeps SSR/hydration stable.
      for (let i = 0; i < 64; i += 1) {
        const side = i % 2 === 0 ? -1 : 1;
        const lane = Math.floor(i / 2);
        const z = -4 - lane * 1.85 - random() * 3.6;
        const x = side * (10 + random() * 25);
        const width = 1.3 + random() * 3.6;
        const depth = 1.5 + random() * 4.2;
        const height = 3.2 + random() * 17.5;
        const geometry = new THREE.BoxGeometry(width, height, depth);
        const mesh = new THREE.Mesh(
          geometry,
          z < -34 ? facadeFarMaterial : facadeMaterial,
        );
        mesh.position.set(x, height / 2 - 3.2, z);
        mesh.rotation.y = side * (0.018 + random() * 0.075);
        addEdges(mesh, random() > 0.91);
        world.add(mesh);

        if (random() > 0.72) {
          const stripGeometry = new THREE.BoxGeometry(0.035, height * 0.58, 0.045);
          const strip = new THREE.Mesh(stripGeometry, cyanMaterial);
          strip.position.set(
            x + side * width * 0.36,
            height * 0.47 - 3.2,
            z + depth * 0.51,
          );
          strip.material = cyanMaterial;
          world.add(strip);
        }
      }

      // The signature object: one impossible vertical infrastructure core.
      const core = new THREE.Group();
      core.position.set(7.1, -2.6, -18);
      core.rotation.y = -0.13;
      world.add(core);

      const beamGeometry = new THREE.BoxGeometry(0.55, 31, 0.55);
      [
        [-2.5, 0, -2.5],
        [2.5, 0, -2.5],
        [-2.5, 0, 2.5],
        [2.5, 0, 2.5],
      ].forEach(([x, y, z], index) => {
        const beam = new THREE.Mesh(beamGeometry, facadeMaterial);
        beam.position.set(x, y + 15.5, z);
        addEdges(beam, index === 1);
        core.add(beam);
      });

      const deckHeights = [1.2, 6.2, 11.4, 17.2, 23.5, 29.1];
      deckHeights.forEach((height, index) => {
        const deck = new THREE.Mesh(
          new THREE.BoxGeometry(7.7 + index * 0.18, 0.42, 7.5 - index * 0.16),
          index === 3 ? cyanMaterial : facadeMaterial,
        );
        deck.position.y = height;
        deck.rotation.y = (index - 2.5) * 0.055;
        addEdges(deck, index === 2 || index === 4);
        core.add(deck);
      });

      const shaft = new THREE.Mesh(new THREE.BoxGeometry(0.13, 32, 0.13), cyanMaterial);
      shaft.position.set(-0.28, 15.8, 2.85);
      core.add(shaft);

      const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.55, 7.5, 6), facadeMaterial);
      crown.position.set(0.4, 33, -0.2);
      crown.rotation.z = 0.045;
      addEdges(crown, true);
      core.add(crown);

      // Cantilevered bridges make the core feel connected to a much larger city.
      [
        { y: 7.6, x: -9.2, length: 18.5, rot: 0.06 },
        { y: 14.4, x: 10.1, length: 20.5, rot: -0.045 },
        { y: 21.1, x: -11.8, length: 23.4, rot: 0.025 },
      ].forEach(({ y, x, length, rot }) => {
        const bridge = new THREE.Mesh(
          new THREE.BoxGeometry(length, 0.32, 0.95),
          railMaterial,
        );
        bridge.position.set(x, y, 0);
        bridge.rotation.z = rot;
        addEdges(bridge, true);
        core.add(bridge);
      });

      // Elevated transit route sweeps through the entire scene.
      const transitCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-38, 3.2, 8),
        new THREE.Vector3(-19, 5.7, -2),
        new THREE.Vector3(-2, 8.8, -10),
        new THREE.Vector3(8.5, 11.6, -18),
        new THREE.Vector3(23, 9.8, -31),
        new THREE.Vector3(39, 7.2, -43),
      ]);
      const transitTube = new THREE.Mesh(
        new THREE.TubeGeometry(transitCurve, 120, 0.12, 6, false),
        railMaterial,
      );
      world.add(transitTube);

      const transitHalo = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(transitCurve.getPoints(150)),
        new THREE.LineBasicMaterial({
          color: 0x7deaff,
          transparent: true,
          opacity: 0.58,
        }),
      );
      world.add(transitHalo);

      const train = new THREE.Group();
      const trainBody = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.34, 0.55), cyanMaterial);
      const trainLight = new THREE.PointLight(0x76eaff, 10, 9, 2);
      trainLight.position.set(0.9, 0, 0.2);
      train.add(trainBody, trainLight);
      world.add(train);

      // Sparse signal beacons: accents, not decoration everywhere.
      const signalGeometry = new THREE.SphereGeometry(0.07, 8, 8);
      [
        [-17, 16, -15],
        [24, 13, -23],
        [-29, 9, -34],
        [7, 31, -18],
      ].forEach(([x, y, z]) => {
        const beacon = new THREE.Mesh(signalGeometry, signalMaterial);
        beacon.position.set(x, y, z);
        world.add(beacon);
      });

      // Ground plane grid converges toward the core and adds Chongqing-like layered depth.
      const grid = new THREE.GridHelper(110, 44, 0x23505f, 0x102027);
      grid.position.set(2, -3.15, -24);
      grid.material.transparent = true;
      grid.material.opacity = 0.28;
      world.add(grid);

      const target = new THREE.Vector3(6.4, 10.2, -18);
      let pointerX = 0;
      let pointerY = 0;
      let scrollProgress = 0;
      let visible = true;
      const clock = new THREE.Clock();

      const resize = () => {
        const { width, height } = mount.getBoundingClientRect();
        renderer.setSize(Math.max(width, 1), Math.max(height, 1), false);
        camera.aspect = Math.max(width, 1) / Math.max(height, 1);
        camera.updateProjectionMatrix();
      };

      const onPointerMove = (event: PointerEvent) => {
        if (reduceMotion) return;
        const rect = mount.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        ) {
          pointerX = 0;
          pointerY = 0;
          return;
        }
        pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      };

      const onScroll = () => {
        const hero = mount.closest(".hero");
        if (!hero) return;
        const rect = hero.getBoundingClientRect();
        scrollProgress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
        mount.style.opacity = String(Math.max(0, 1 - scrollProgress * 1.35));
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
        },
        { threshold: 0.01 },
      );
      observer.observe(mount);

      const render = () => {
        if (!visible) return;
        const elapsed = clock.getElapsedTime();

        if (!reduceMotion) {
          const trainT = (elapsed * 0.035) % 1;
          const point = transitCurve.getPointAt(trainT);
          const tangent = transitCurve.getTangentAt(trainT).normalize();
          train.position.copy(point);
          train.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), tangent);

          world.rotation.y += ((-0.055 + pointerX * 0.018) - world.rotation.y) * 0.035;
          world.rotation.x += ((pointerY * -0.009) - world.rotation.x) * 0.035;
        }

        camera.position.x += ((-2.2 + pointerX * 1.5) - camera.position.x) * 0.045;
        camera.position.y += ((8.5 - pointerY * 0.75 - scrollProgress * 5.2) - camera.position.y) * 0.045;
        camera.position.z += ((34 + scrollProgress * 3.8) - camera.position.z) * 0.045;
        target.y = 10.2 - scrollProgress * 3.4;
        camera.lookAt(target);
        renderer.render(scene, camera);
      };

      resize();
      window.addEventListener("resize", resize);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      renderer.setAnimationLoop(render);
      setReady(true);

      cleanup = () => {
        observer.disconnect();
        renderer.setAnimationLoop(null);
        window.removeEventListener("resize", resize);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("scroll", onScroll);

        const geometries = new Set<BufferGeometry>();
        const materials = new Set<Material>();
        world.traverse((object) => {
          if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.LineSegments) {
            if (object.geometry) geometries.add(object.geometry);
            const material = object.material;
            if (Array.isArray(material)) material.forEach((item) => materials.add(item));
            else if (material) materials.add(material);
          }
        });
        geometries.forEach((geometry) => geometry.dispose());
        materials.forEach((material) => material.dispose());
        renderer.dispose();
        renderer.domElement.remove();
      };
    }

    boot().catch(() => {
      // The CSS fallback beneath the canvas remains fully functional.
      setReady(false);
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div className={`hero-megacity ${ready ? "hero-megacity-ready" : ""}`} aria-hidden="true">
      <div className="hero-city-webgl" ref={mountRef} />

      <div className="hero-city-fallback">
        <div className="fallback-spine" />
        <div className="fallback-deck fallback-deck-a" />
        <div className="fallback-deck fallback-deck-b" />
        <div className="fallback-deck fallback-deck-c" />
        <div className="fallback-rail"><span /></div>
        <div className="fallback-tower fallback-tower-a" />
        <div className="fallback-tower fallback-tower-b" />
        <div className="fallback-tower fallback-tower-c" />
        <div className="fallback-tower fallback-tower-d" />
      </div>

      <div className="hero-city-atmosphere" />
      <div className="hero-city-vignette" />
      <div className="hero-city-scan" />
    </div>
  );
}
