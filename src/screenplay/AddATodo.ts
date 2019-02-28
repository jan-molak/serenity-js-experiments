import { Task } from '@serenity-js/core';
import { Enter, Press } from '@serenity-js/protractor';
import { protractor } from 'protractor';
import { TodoList } from './ui/widgets';

export const AddATodo = {
    called: (name: string) => Task.where(`#actor adds an item called ${ name }`,
        Enter.theValue(name).into(TodoList.New_Todo),
        Press.the(protractor.Key.ENTER).in(TodoList.New_Todo),
    ),
};
