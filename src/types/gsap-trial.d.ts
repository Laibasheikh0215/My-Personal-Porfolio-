declare module 'gsap-trial/SplitText' {
  export default class SplitText {
    constructor(target: string | string[] | HTMLElement | HTMLElement[], vars?: any);
    chars: HTMLElement[];
    lines: HTMLElement[];
    words: HTMLElement[];
    revert(): void;
    split(config?: any): any;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(config: any): ScrollSmoother;
    static refresh(force?: boolean): void;
    scrollTop(value: number): void;
    paused(value: boolean): void;
    scrollTo(target: string | number | HTMLElement, smooth?: boolean, position?: string): void;
    kill(): void;
  }
}