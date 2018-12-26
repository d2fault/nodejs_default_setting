// DB에 저장될 Model
var Album   = require('../models/album');

var methods = {
    // /routes/album.js의 router.post('/invoke/createAlbum', albumController.createAlbum) 코드로 인하여
    // /invoke/createAlbum 아래처럼 동작한다.
    createAlbum: function(req, res) {
        // scheme를 생성하고
        var album = new Album();
        // req의 value를 모델(baseSchema를 상속받은 testSchema)에 입력
        album.singer = req.body.id;
        album.album_type = req.body.album_type;
        album.album_number = req.body.album_number;
        album.album_title = req.body.album_title;
        album.song_number = req.body.song_number;
        album.song_title = req.body.song_title;
        album.published_date = req.body.published_date;
        album.modified_date = new Date();

        // save(invoke) 실행
        album.save(function(err){
            if(err){
                console.error(err);
                res.json({ result: 'Fail' });
                return;
            }
            console.log("newAlbum success");
            res.json({ result: 'success', _id: album._id });
        });
    }
};

module.exports = methods;
