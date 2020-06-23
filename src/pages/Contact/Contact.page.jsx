import React, { useEffect, useRef } from "react";

import {
  TweenMax,
  TimelineMax,
  Back,
  Elastic,
  Bounce,
  Power4,
  Linear,
} from "gsap";

import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as AutumnAnimation } from "../../assets/autumn_card.svg";

const useStyles = makeStyles(() => ({
  root: {
    maxHeight: "100vh",
    overflow: "hidden",
  },
  svg: {
    maxHeight: "100vh",
    minHeight: "100vh",
  },
}));

const Contact = () => {
  const classes = useStyles();
  let svg = useRef(null);

  const clearStage = () => {
    let clearTl = new TimelineMax();

    let backFallingLeaves = svg.children[2];
    let frontFallingLeaves = svg.children[8];
    let text = svg.children[9];
    let treeLeaves = svg.children[4].children;
    let bird = svg.children[6].children[0];
    let nest = svg.children[7];
    let tree = svg.children[3];
    let floorLeaves = svg.children[5].children;

    clearTl.set(frontFallingLeaves, { opacity: 0 });
    clearTl.set(backFallingLeaves, { opacity: 0 });
    clearTl.set(text, { opacity: 0 });
    clearTl.set(treeLeaves, { opacity: 0 });
    clearTl.set(bird, { y: "+=65", opacity: 0 });
    clearTl.set(nest, { opacity: 0 });
    clearTl.set(tree, { opacity: 0 });
    clearTl.set(floorLeaves, { y: "+=275" });
    return clearTl;
  };

  const enterFloorVegetation = () => {
    let fleavesTl = new TimelineMax();

    let floorLeaves = svg.children[5].children;
    let tree = svg.children[3];

    fleavesTl
      .staggerTo(floorLeaves, 1, { y: 0, ease: Back.easeInOut }, 0.01)
      .fromTo(
        tree,
        1.1,
        { scaleY: 0.2, opacity: 0, transformOrigin: "center bottom" },
        {
          scaleY: 1,
          opacity: 1,
          transformOrigin: "center bottom",
          ease: Back.easeInOut,
        }
      )
      .fromTo(
        tree,
        0.9,
        { scaleX: 0.2, opacity: 0, transformOrigin: "center bottom" },
        {
          scaleX: 1,
          opacity: 1,
          transformOrigin: "center bottom",
          ease: Back.easeInOut,
        },
        "-=0.9"
      );

    return fleavesTl;
  };

  const enterTreeStuff = () => {
    let treeStuffTl = new TimelineMax();

    let treeLeaves = svg.children[4].children;
    let nest = svg.children[7];
    let bird = svg.children[6].children[0];
    let birdHat = svg.children[6].children[0].children[13];
    let birdEyes = [
      svg.children[6].children[0].children[4],
      svg.children[6].children[0].children[6],
    ];

    const startBlinking = () => {
      let birdBlinksTl = new TimelineMax({ repeat: -1, repeatDelay: 5 });

      birdBlinksTl
        .set(birdEyes, { opacity: 0 })
        .set(birdEyes, { opacity: 1 }, "+=0.2")
        .set(birdEyes, { opacity: 0 }, "+=1.2")
        .set(birdEyes, { opacity: 1 }, "+=0.2");
    };

    treeStuffTl
      .staggerFromTo(
        treeLeaves,
        0.5,
        {
          scale: 0.2,
          opacity: 0,
          transformOrigin: "center bottom",
        },
        { scale: 1, opacity: 1, transformOrigin: "center bottom" },
        0.02
      )
      .fromTo(
        nest,
        1,
        {
          y: 0,
          scale: 0.2,
          opacity: 0,
          transformOrigin: "center center",
        },
        {
          y: "-=15",
          scale: 1,
          opacity: 1,
          transformOrigin: "center center",
          ease: Elastic.easeOut,
        },
        "+=0.1"
      )
      .to(
        nest,
        0.3,
        {
          y: "+=15",
          ease: Bounce.easeOut,
        },
        "-=0.2"
      )
      .add("nest-pop-in")
      .set(birdHat, { rotation: 12, x: "+=6" })
      .to(
        bird,
        1.4,
        { y: "-=39", opacity: 1, ease: Power4.easeInOut },
        "nest-pop-in+=0.1"
      )
      .add("bird-peeking")
      .set(birdEyes, { opacity: 0 })
      .set(birdEyes, { opacity: 1 }, "+=0.2")
      .set(birdEyes, { opacity: 0 }, "+=0.3")
      .set(birdEyes, { opacity: 1 }, "+=0.2")
      .add("bird-blinks")
      .to(bird, 0.8, { y: "-=34", ease: Power4.easeInOut })
      .to(bird, 0.3, { y: "+=8", ease: Back.easeInOut })
      .to(birdHat, 0.4, { y: "-=12" }, "-=0.6")
      .to(
        birdHat,
        0.3,
        { y: 0, rotation: 0, x: 0, onComplete: startBlinking },
        "-=0.2"
      );

    return treeStuffTl;
  };

  const enterGreeting = () => {
    let greetingTl = new TimelineMax();

    let text = svg.children[9];
    let backFallingLeaves = svg.children[2];
    let brownLeaf = svg.children[2].children[0];
    let redLeaf = svg.children[2].children[1];
    let orangeLeaf = svg.children[2].children[2];

    const startLoops = () => {
      let colors = ["#edcc93", "#f7e3ae", "#f3ebcc", "#edcc93"];
      let bgTl = new TimelineMax({ repeat: -1, repeatDelay: 2 });

      bgTl
        .to(document.body, 3, { backgroundColor: colors[0] })
        .to(document.body, 3, { backgroundColor: colors[1] }, "+=2")
        .to(document.body, 3, { backgroundColor: colors[2] }, "+=2")
        .to(document.body, 3, { backgroundColor: colors[3] }, "+=2");

      const repeatFall = (leafId) => {
        let range = Math.random() * 800;
        let offset = 400;
        let newXPosition = range - offset;

        TweenMax.set(leafId, {
          x: newXPosition,
          y: -100,
          opacity: 0.2,
          rotation: Math.random() * 360,
        });
        TweenMax.to(leafId, 10 + Math.random() * 10, {
          y: "+=1200",
          opacity: 1,
          onComplete: repeatFall,
          onCompleteParams: [leafId],
          ease: Linear.easeNone,
        });
      };

      TweenMax.set(backFallingLeaves, {
        y: -100,
        opacity: 0.2,
      });
      TweenMax.to(brownLeaf, 10 + Math.random() * 10, {
        y: "+=1200",
        opacity: 1,
        onComplete: repeatFall,
        onCompleteParams: [brownLeaf],
        ease: Linear.easeNone,
      });
      TweenMax.to(redLeaf, 10 + Math.random() * 10, {
        y: "+=1200",
        opacity: 1,
        onComplete: repeatFall,
        onCompleteParams: [redLeaf],
        ease: Linear.easeNone,
      });
      TweenMax.to(orangeLeaf, 10 + Math.random() * 10, {
        y: "+=1200",
        opacity: 1,
        onComplete: repeatFall,
        onCompleteParams: [orangeLeaf],
        ease: Linear.easeNone,
      });
    };

    greetingTl.fromTo(
      text,
      1,
      { y: "-50", opacity: 0 },
      { y: 0, opacity: 1, onComplete: startLoops }
    );

    return greetingTl;
  };

  useEffect(() => {
    let masterTl = new TimelineMax();

    svg &&
      masterTl
        .add(clearStage(), "scene-clear-stage")
        .add(enterFloorVegetation(), "scene-floor-vegetation")
        .add(enterTreeStuff(), "scene-enter-treestuff")
        .add(enterGreeting(), "scene-enter-greeting");

    console.log("svg children: ", svg.children);
  }, [svg]);

  return (
    <div className={classes.root}>
      <AutumnAnimation className={classes.svg} ref={(el) => (svg = el)} />

      <form action=""></form>
    </div>
  );
};

export default Contact;
