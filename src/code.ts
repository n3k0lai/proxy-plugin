interface card {
    name: string;
    id: string;
}

startUI();

// @ts-ignore
async function startUI() {
  figma.showUI(__html__, { 
    width: 350,
    height: 610,
    themeColors: true
  });
}