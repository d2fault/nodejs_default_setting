// schema 상속을 위한 package
const extendSchema = require('mongoose-extend-schema');
const mongoose = require('mongoose');
var Album = require('./album');

// 다음과 같이 schema를 상속하여 사용할 수 있다.
const Song = extendSchema(Album, {
    lyrics: { type: String }
});

// module.exports = mongoose.model('모델명', 상속받은 스키마의 이름);
module.exports = mongoose.model('Song', Song);