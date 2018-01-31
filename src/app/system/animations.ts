// import { state, style, animate, trigger, transition, } from '@angular/core';
import { trigger, state, style, animate, transition, query } from '@angular/animations';
export const fadeIn =
  trigger('fadeIn', [
    state('*',
      style({
        "-webkit-animation-fill-mode": "both",
        "animation-fill-mode": "both",
        "-webkit-transform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
      })
    ),
    transition(':enter', [
      style({
        "-webkit-transform": "translate3d(100%, 0, 0)",
        "transform": "translate3d(100%, 0, 0)",
        "visibility": "visible"
      }),
      animate('0.5s linear'),
    ]),
    transition(':leave', [
      style({
        "-webkit-transform": "translate3d(100%, 0, 0)",
        "transform": "translate3d(100%, 0, 0)",
        "visibility": "visible"
      }),
      animate('1s linear'),
    ])
  ]);

export const slideInOut =
  trigger('slideInOut', [
    transition('* <=> *', [
      query(':enter',
        style({
          position: 'absolute',
          width:'100%',
          transform: 'translateX(100%)'
        }),
        {optional:true}),
      query(':leave',
        animate('300ms ease-out',
          style({
            position: 'absolute',
            width:'100%',
            opacity: 0.5,
            transform: 'translateX(-120%)'
          })
        ),
        {optional:true}),
      query(':enter',
        animate('200ms ease-in',
          style({
            position: 'absolute',
            opacity: 1,
            transform: 'translateX(0%)'
          })
        ),
        {optional:true}),
    ])
  ]);
