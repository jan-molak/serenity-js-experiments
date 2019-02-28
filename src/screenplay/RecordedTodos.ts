import { Text } from '@serenity-js/protractor';
import { TodoList } from './ui/widgets';

export const RecordedTodos = () => Text.ofAll(TodoList.Items);
