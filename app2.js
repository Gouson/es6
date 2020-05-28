import User, { createURL, gravatr } from './users';

const gouson = new User('Gouson', '406263733@qq.com')
const profil = createURL(gouson.name)
const img = gravatr(gouson.email)
console.log(img)