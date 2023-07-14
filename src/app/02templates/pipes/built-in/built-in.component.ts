import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-built-in',
  templateUrl: './built-in.component.html',
  styles: [],
})
export class BuiltInComponent {
  text: string = 'hELLO wORLD';

  date: Date = new Date();

  pi: number = 3.14;

  currency: number = 123456.789;

  percent: number = 0.255;

  invites = {
    male: 'Invite him.',
    female: 'Invite her.',
    other: 'Invite them.',
  };

  clients = {
    '=0': "We don't have any customers waiting.",
    '=1': 'We have a client waiting.',
    other: 'We have # customers waiting.',
  };

  object: Object = {
    foo: 'bar',
    baz: 'qux',
    nested: {
      xyz: 3,
      numbers: [1, 2, 3, 4, 5],
    },
  };

  collection: string[] = ['a', 'b', 'c', 'd'];

  str: string = 'abcdefghij';

  myObservable = interval(2000);

  myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('We have data.');
    }, 2000);
  });
}
