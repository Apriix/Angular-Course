import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MyNavigation } from './components/navigation/navigation.component';
import { MyCalculatorModule } from './my-calculator/my-calculator-module/my-calculator.module';
import { PipesModule } from './pipes/pipes.module';
import { UserService } from './user-service.service';
import { AppChildComponent } from './app-child/app-child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MyCalculatorModule,
    MyNavigation,
    FormsModule,
    PipesModule,
    CommonModule,
    AppChildComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private userService = inject(UserService);

  private someMethod(): void {
    this.userService;
  }

  //   public counter = signal<number>(0);

  //   public plusCounter(): void {
  //     this.counter.update((value) => value + 1);
  //   }

  //   public shippingAddresses = signal<string[]>([
  //     'New-York',
  //     'Los Angeles',
  //     'Chicago',
  //   ]);

  //   //   public selectedOptions = signal<string>(this.shippingAddresses()[0]);
  //   public selectedOptions = linkedSignal(() => this.shippingAddresses()[0]);

  //   public changeShippingAddress(index: number): void {
  //     this.selectedOptions.set(this.shippingAddresses()[index]);
  //   }

  //   public changeAddresses(): void {
  //     this.shippingAddresses.set(['Moscow', 'Saint-Petersburg', 'Kazan']);
  //   }
}
