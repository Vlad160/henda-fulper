import {action, makeObservable, observable} from "mobx";

export interface Link {
  id: string;
  src: string;
}

export class Store {

  links: Link[] = [
    {
      id: "1",
      src: "https://mobx.js.org/react-integration.html",
    },
    {
      id: "2",
      src: "https://github.com/vitejs/vite-plugin-basic-ssl",
    },
    {
      id: "3",
      src: "https://mdigi.tools/lighten-color/#2c3035",
    },
  ];

  constructor() {
    makeObservable(this, {
      links: observable.shallow,
      addLink: action,
    });
  }

  addLink(link: string) {
    this.links.push({id: crypto.randomUUID(), src: link});
  }

}

