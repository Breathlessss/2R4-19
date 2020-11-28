/*
 Функции
 f(x) = 2x + 5;
*/

// rgb()
// url()
// .toFixed()
// .random()


//let recipe;
function cookEggs (eggs = 2, sausage = false, cheese = true, tomato = false) {
    //let eggs = 2;
    let recipe = "Берем сковороду и ставим на огонь\n";
    recipe += `Разбить в сковороду ${eggs} яйца\n`;
    if (sausage) {
        recipe += "Добавить колбаску.\n"
    }
    if (cheese) {
        recipe += "Потереть сырочек.\n"
    }
    if (tomato) {
        recipe += "Добавить помидор.\n"
    }
    recipe += "Добавить соль и перец, накрыть крышкой и ждать 5 минут\n";
    recipe += "Яичница из " + eggs + " яиц ";
    if (sausage) {
        recipe += "с колбасой ";
        if (tomato && cheese) {
            recipe += ", помидорами и сыром ";
        } else if (tomato) {
            recipe += " и помидорами";
        } else if (cheese) {
            recipe += " и сыром";
        }    
    } else if (tomato) {
        recipe += " и помидорами";
        if (cheese) {
            recipe += " и сыром";
        }
    } else if (cheese) {
            recipe += " и сыром";
        }        
    recipe += "готова!\n";
    console.log(recipe);
}

cookEggs(2);
cookEggs(1, true, false);
cookEggs(3);
