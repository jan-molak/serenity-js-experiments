import { Duration } from '@serenity-js/core';
import { WithStage } from '@serenity-js/cucumber';
import { Given, TableDefinition, Then, When } from 'cucumber';
import { Navigate } from '@serenity-js/protractor';
import { contains, Ensure, equals } from '@serenity-js/assertions';
import { AddATodo, RecordedTodos } from '../../src';

Given(/^(.*) has an empty todo list/, { timeout: Duration.ofSeconds(3).milliseconds }, function (this: WithStage, name: string) {
    return this.stage.theActorCalled(name).attemptsTo(
        Navigate.to('/examples/angularjs/#/')
    );
});

Given(/^(.*) has a todo list containing:/, function (this: WithStage, name: string, items: TableDefinition) {
    return this.stage.theActorCalled(name).attemptsTo(
        Navigate.to('/examples/angularjs/#/'),
        ...namesOf(items).map(AddATodo.called)
    );
});

When(/^(?:s?he|they) adds? '(.*)' to (?:his|her|their) list/, function (this: WithStage, item: string) {
    return this.stage.theActorInTheSpotlight().attemptsTo(
        AddATodo.called(item),
    );
});

Then(/^'(.*)' should be recorded in (?:his|her|their) list/, function (this: WithStage, item: string) {
    return this.stage.theActorInTheSpotlight().attemptsTo(
        Ensure.that(RecordedTodos(), contains(item)),
    );
});

Then(/^(?:his|her|their) todo list should contain:/, function (this: WithStage, items: TableDefinition) {
    return this.stage.theActorInTheSpotlight().attemptsTo(
        Ensure.that(RecordedTodos(), equals(namesOf(items))),
    );
});

function namesOf(items: TableDefinition) {
    return items.hashes().map(entry => entry.item);
}