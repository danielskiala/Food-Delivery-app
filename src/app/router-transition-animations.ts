import {
  trigger,
  transition,
  style,
  query,
  animate,
  animateChild,
  group,
} from "@angular/animations";
export const routeTransitionAnimations = trigger("routeAnimations", [
  transition(":increment", slideTo("right")),
  transition(":decrement", slideTo("left")),
]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          top: 0,
          [direction]: 0,
          width: "100%",
        }),
      ],
      optional
    ),
    query(":enter", [style({ [direction]: "-100%", opacity: 0 })]),
    query(":leave", animateChild()),

    group([
      query(
        ":leave",
        [animate("600ms ease", style({ [direction]: "100%" , opacity:0}))],
        optional
      ),
      query(":enter", [animate("600ms ease", style({ [direction]: "0%",  opacity:1}))], optional),
    ]),

    query(":enter", animateChild()),
  ];
}
