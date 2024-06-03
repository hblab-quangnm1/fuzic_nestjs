// Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29

type Slots = {
  [placeholder: string]: string | number | boolean | Array<unknown>;
};

const compileMessage = (template: string, slots: Slots) => {
  return { template, slots };
};

export { compileMessage, type Slots };
