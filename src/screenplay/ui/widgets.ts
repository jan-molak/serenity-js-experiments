import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class TodoList {
    static New_Todo = Target.the('new todo field').located(by.css('.new-todo'));
    static Items    = Target.all('items').located(by.css('ul.todo-list li'));
}

export class Item {
    static Name     = Target.the('item name').located(by.css('label'));
    static Toggle   = Target.the('toggle').located(by.css('input[type="checkbox"]'));
}
