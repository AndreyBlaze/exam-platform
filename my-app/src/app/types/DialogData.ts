export type DialogData = {
  title: string;
  desc: string;
  actions: {text: string, returnType: boolean | null, main: boolean}[]
}