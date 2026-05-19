declare module 'gsap-trial/SplitText' {
  export default class SplitText {
    constructor(target: string | string[] | HTMLElement | HTMLElement[], vars?: any);
    chars: HTMLElement[];
    lines: HTMLElement[];
    [key: string]: any;
  }
}