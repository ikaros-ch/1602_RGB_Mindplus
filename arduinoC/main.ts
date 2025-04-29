//% color="#FF6F00" iconWidth=50 iconHeight=40
namespace Grove1602LCD {
    let lcd: any;

    //% block="Initialize LCD (16x2)" blockType="command"
    export function initLCD(parameter: any, block: any) {
        Generator.addInclude('rgb_lcd', '#include <rgb_lcd.h>');
        Generator.addObject('lcd', 'rgb_lcd', 'lcd;');
        Generator.addSetup('lcd.begin', 'lcd.begin(16, 2);');
    }

    //% block="Clear screen" blockType="command"
    export function clearScreen(parameter: any, block: any) {
        Generator.addCode('lcd.clear();');
    }

    //% block="Set RGB backlight R:%r G:%g B:%b" blockType="command"
    //% r.shadow="range" r.params.min=0 r.params.max=255 r.defl=255
    //% g.shadow="range" g.params.min=0 g.params.max=255 g.defl=255
    //% b.shadow="range" b.params.min=0 b.params.max=255 b.defl=255
    export function setRGB(parameter: any, block: any) {
        const r = parameter.r.code;
        const g = parameter.g.code;
        const b = parameter.b.code;
        Generator.addCode(`lcd.setRGB(${r}, ${g}, ${b});`);
    }

    //% block="Display text: %text at column %col row %row" blockType="command"
    //% text.shadow="string" text.defl="Hello World"
    //% col.shadow="range" col.params.min=0 col.params.max=15 col.defl=0
    //% row.shadow="range" row.params.min=0 row.params.max=1 row.defl=0
    export function displayText(parameter: any, block: any) {
        const text = parameter.text.code;
        const col = parameter.col.code;
        const row = parameter.row.code;
        Generator.addCode(`lcd.setCursor(${col}, ${row});\n\tlcd.print(${text});`);
    }
}
