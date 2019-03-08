const crypto = require('crypto')

// 加密
let Encrypt = (data) => {
    let key = 'class'
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
// 解密
let Decrypt = (encrypted) => {
    let key = 'class'
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

let Random = (Min, Max) => {
      var Range = Max - Min;
      var Rand = Math.random();
      if(Math.round(Rand * Range)==0){
        return Min + 1;
      }
      var num = Min + Math.round(Rand * Range);
      return num;
}

 // 加密的关键字

module.exports = {
  Encrypt,
  Decrypt
}

// let encrypted = Encrypt(data, key)
// let decrypted = Decrypt(encrypted, key)

// console.log('明文' + data)  //明文xtang
// console.log('加密后' + encrypted) //加密后6903756dc076823f5222227fb824180d
// console.log('解密后' + decrypted)  //解密后xtang