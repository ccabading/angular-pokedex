import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
      state('in', style({
          'max-height': '500px', visibility: 'visible', opacity: '1'
      })),
      state('out', style({
          'max-height': '0px', visibility: 'hidden', opacity: '0'
      })),
      transition('in => out', [group([
          animate('600ms ease-in-out', style({
              'max-height': '0px'
          })),
          animate('700ms ease-in-out', style({
              visibility: 'hidden'
          })),
          animate('400ms ease-in-out', style({
              opacity: '0'
          }))
      ]
      )]),
      transition('out => in', [group([
          animate('600ms ease-in-out', style({
            'max-height': '500px'
          })),
          animate('1ms ease-in-out', style({
              visibility: 'visible'
          })),
          animate('800ms ease-in-out', style({
            opacity: '1'
          }))
      ]
      )])
  ]),
];
