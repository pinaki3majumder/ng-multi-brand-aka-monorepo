# Angular Multi-Brand Application AKA MonoRepo/Monolithic Repository

This project demonstrates how to manage multiple brands within a single Angular standalone project using a **MonoRepo** approach. By consolidating multiple Angular applications into a single repository, this setup enables centralized management, reusability, and streamlined development of brand-specific theming and functionality.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

## What is a MonoRepo?

A **MonoRepo** (short for "monolithic repository") is a version-controlled repository that contains multiple projects or applications within a single codebase. This approach contrasts with a **PolyRepo**, where each project resides in its own repository.  

In a MonoRepo:
1. All applications and shared components exist in the same repository.
2. Changes to shared libraries or services can be applied and reflected across all projects simultaneously.
3. Build tools, configurations, and dependencies are shared across projects for consistency and efficiency.  

This project uses the MonoRepo approach to simplify the management of multiple brand-specific Angular applications.

### 
  
---

---

## Benefits of Using a MonoRepo for Multi-Brand Applications

Combining a MonoRepo approach with a multi-brand Angular application offers several advantages:  

### 1. **Centralized Codebase**
   - All brand-specific applications, shared components, services, and configurations are stored in a single repository, reducing management complexity.

### 2. **Code Reusability**
   - Shared libraries and utilities can be reused across all applications, ensuring consistency and reducing duplication.

### 3. **Atomic Changes**
   - Updates to shared resources (like services or UI components) can be applied in a single commit, ensuring compatibility across all applications simultaneously.

### 4. **Simplified Dependency Management**
   - All projects share a single dependency tree, avoiding version conflicts and simplifying updates to third-party libraries.

### 5. **Consistent Tooling**
   - Common build tools, linting configurations, and test setups ensure a uniform development environment across all brands.

### 6. **Streamlined Collaboration**
   - Developers can work on multiple projects from the same repository, improving cross-team collaboration and reducing context switching.

### 7. **Efficient Maintenance**
   - Bug fixes or performance improvements in shared components automatically benefit all brand applications.

### 8. **Scalability**
   - Adding new brand applications is straightforward and requires no new repository or major restructuring.

### 9. **Cost and Time Savings**
   - Simplified workflows save time and reduce overhead compared to managing separate repositories for each brand.

### 10. **Brand-Specific Customization**
   - Each brand can have its unique theming and functionality while leveraging the shared resources for core features.


### 
  
---
---

 
## Steps to Set Up

### 1. Create a New Angular Project
Run the following command to create a new Angular project:

```bash
ng new ng-multi-brand-aka-monorepo
```

### 2. Rename `app.component`
To avoid confusion when adding multiple projects, rename the default `app.component` to `common-app.component`:

- Update the filename: `src/app/app.component.ts` → `src/app/common-app.component.ts`
- Update references in other files as needed.

### 3. Add a New Application
Use the Angular CLI to generate a new application for a specific brand. For example, create an application named `red`:

```bash
ng generate application red
```

### 4. Update `package.json` for Easy Project Commands
Add a custom command in the `scripts` section of your `package.json` to run a specific brand application. For example, to run the `red` application:

```bash
"start:red": "ng serve --project=red --port 4200"
```

### Running a Specific Application
Use the custom command to start the desired application. For instance, to run the `red` brand application:

```bash
npm run start:red
```



## Notes
- You can repeat Step 3 to add more applications for additional brands.
- Use unique ports for each application to avoid conflicts.
- Customize theming and functionality within each application's folder.
- The MonoRepo setup makes it easy to manage, scale, and maintain multi-brand applications effectively.



### 
  
---
---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
