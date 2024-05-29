
function getAdmins (map) {
    let admins = []
    for ([key , value] of map) {
        if (value === 'Admin') {
            admins.push (key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set ('Luiz','Admin');
usuarios.set ('Larissa','Dev');
usuarios.set ('Marcos','Técnico');
usuarios.set ('Roberta','Admin');

console.log(getAdmins(usuarios))








