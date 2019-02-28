import { Actor, Cast } from '@serenity-js/core';
import { BrowseTheWeb } from '@serenity-js/protractor';
import { protractor } from 'protractor';

export class Actors implements Cast {
    actor(name: string): Actor {
        return Actor.named(name).whoCan(
            BrowseTheWeb.using(protractor.browser),
        );
    }
}
