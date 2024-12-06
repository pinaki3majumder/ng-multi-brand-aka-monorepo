import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('../../../../src/app/common-app.routes').then(
                (mod) => mod.routes
            ),
    }
];
