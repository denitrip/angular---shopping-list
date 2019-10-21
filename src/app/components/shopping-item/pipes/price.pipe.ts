import { Pipe } from '@angular/core';

@Pipe({ name: 'PriceCurrency' })

export class PriceCurrencyPipe {
    transform(value: number): string {
        return `${value} $`
    }
}