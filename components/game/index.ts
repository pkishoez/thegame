import { Canvas } from "./canvas";
import { initDividers } from "./components/divider";
import { initOpponents } from "./components/opponents";
import { initMyCar } from "./components/mycar";
import { Howl } from "howler";
import { interpolate } from "./components/utils";

const sound = new Howl({
  src: "/game.mp3",
});

const soundOnLoad = new Promise((resolve) => {
  sound.once("load", resolve);
});

let requestedAnimation;
export interface IStats {
  score: number;
  speed: number;
  volume: number;
}
export const init = async (
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  onChange: (v: IStats) => void
) => {
  await soundOnLoad;
  requestedAnimation && cancelAnimationFrame(requestedAnimation);
  sound.volume(0);
  sound.play();
  let targetVolume = 1;
  let targetSpeed = 15;
  let speedInterpolator = 0.01;
  let currentSpeed = 0;
  let currentVolume = 0;
  let volumeInterpolator = 0.001;

  const playground = new Canvas(canvas, {
    width,
    height,
  });

  const dividers = initDividers(
    {
      gap: 50,
      color: "#fff",
      height: 80,
      width: 20,
      baseSpeed: 1,
    },
    playground.limitedConfig()
  );
  const opponents = initOpponents(
    {
      car: { height: 100, width: 50, color: "#ccc", baseSpeed: 2 },
      gap: 200,
    },
    playground.limitedConfig()
  );
  const myCar = initMyCar(
    { color: "cyan", height: 100, width: 50, baseSpeed: 4 },
    playground.limitedConfig()
  );
  window.addEventListener("keydown", (ev) => {
    if (ev.key === "ArrowLeft") myCar.move("left");
    if (ev.key === "ArrowRight") myCar.move("right");
  });
  let score = 0;
  function tick() {
    dividers.tick(currentSpeed);
    opponents.tick(currentSpeed);
    const opponentLane = opponents.lastOpponent().lane;
    myCar.move(opponentLane === "left" ? "right" : "left");
    myCar.tick(currentSpeed);
    playground.render();
    requestedAnimation = requestAnimationFrame(tick);
    score++;
    currentSpeed = interpolate(currentSpeed, targetSpeed, speedInterpolator);
    currentVolume = interpolate(
      currentVolume,
      targetVolume,
      volumeInterpolator
    );
    currentVolume < 1 && sound.volume(currentVolume);
    onChange({
      score,
      speed: currentSpeed,
      volume: currentVolume,
    });
  }
  playground.render();
  tick();
};