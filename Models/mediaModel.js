const { pool } = require("../database");
class Media {

    static async getAllMedias() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.media;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all devices.');
        }
    }
    static async addMedia(mediaData) {
        try {
            const is_deleted = false;
            const result = await pool.query(`

              INSERT INTO library.media (media_id,product_id,author, description, publisher, publication_date, file_size, is_interactive, is_deleted) 
              VALUES ('${mediaData.media_id}','${mediaData.product_id}','${mediaData.author}','${mediaData.description}',
              '${mediaData.publisher}', '${mediaData.publication_date}', '${mediaData.file_size}', '${mediaData.is_interactive}',${is_deleted});

            `)

            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to add media data');
        }
    }
}

module.exports = {
    Media,
}