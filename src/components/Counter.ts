/**
 * Example component demonstrating TypeScript classes
 */

export interface CounterOptions {
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
}

export class Counter {
  private value: number;
  private step: number;
  private min: number;
  private max: number;
  private element: HTMLElement | null = null;

  constructor(options: CounterOptions = {}) {
    this.value = options.initialValue ?? 0;
    this.step = options.step ?? 1;
    this.min = options.min ?? Number.MIN_SAFE_INTEGER;
    this.max = options.max ?? Number.MAX_SAFE_INTEGER;
  }

  increment(): void {
    if (this.value + this.step <= this.max) {
      this.value += this.step;
      this.render();
    }
  }

  decrement(): void {
    if (this.value - this.step >= this.min) {
      this.value -= this.step;
      this.render();
    }
  }

  getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    if (value >= this.min && value <= this.max) {
      this.value = value;
      this.render();
    }
  }

  render(selector?: string): HTMLElement {
    if (selector) {
      this.element = document.querySelector(selector);
    }

    if (!this.element) {
      this.element = document.createElement('div');
      this.element.className = 'counter';
    }

    this.element.innerHTML = `
      <div class="counter-container">
        <button class="counter-btn" data-action="decrement">-</button>
        <span class="counter-value">${this.value}</span>
        <button class="counter-btn" data-action="increment">+</button>
      </div>
    `;

    // Add event listeners
    this.element.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = (e.currentTarget as HTMLElement).dataset.action;
        if (action === 'increment') this.increment();
        if (action === 'decrement') this.decrement();
      });
    });

    return this.element;
  }
}
