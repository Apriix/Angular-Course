import { inject } from '@angular/core';

class PostService {
  public getList() {
    //return list
  }
}

class ComponentList {
  private postService = inject(PostService);
}

class Injector {
  private container = new Map();

  constructor(private providers: any[] = []) {
    this.providers.forEach((service) =>
      this.container.set(service, new service())
    );
  }
  public get(service: any) {
    const serviceInstance = this.container.get(service);

    if (!serviceInstance) {
      throw Error(`RootInjector: No provider for ${service}`);
    }
    return serviceInstance;
  }
}
