var mongoose = require('mongoose');

// [Album Schema Config]
// 이 스키마를 상속하여 song.js를 생성
const Album = new mongoose.Schema({
    singer: String,
    album_type: String,
    album_number: Number,
    album_title: String,
    song_number: Number,
    song_title: String,
    published_date: { type: Date, default: Date.now  },
    modified_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Album', Album);