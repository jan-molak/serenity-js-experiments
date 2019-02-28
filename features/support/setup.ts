import { Actor, Duration, serenity } from '@serenity-js/core';
import { FileSystem, Path } from '@serenity-js/core/lib/io';
import { ArtifactArchiver, ConsoleReporter, SerenityBDDReporter } from '@serenity-js/core/lib/stage';
import { WithStage } from '@serenity-js/cucumber';
import { defineParameterType, setDefaultTimeout, setWorldConstructor } from 'cucumber';
import { Actors } from '../../src/';

setDefaultTimeout(Duration.ofSeconds(5).milliseconds);

setWorldConstructor(function (this: WithStage, { parameters }) {
    this.stage = serenity.callToStageFor(new Actors());
});

defineParameterType({
    regexp: /(.*?)/,
    transformer(this: WithStage, name: string): Actor {
        const pronoun = /s?he|they/;

        return pronoun.test(name)
            ? this.stage.theActorInTheSpotlight()
            : this.stage.theActorCalled(name);
    },
    name: 'actor'
});

serenity.stageManager.register(
    new ArtifactArchiver(new FileSystem(new Path('./target/site/serenity'))),
    new SerenityBDDReporter(),
    new ConsoleReporter(),
);
