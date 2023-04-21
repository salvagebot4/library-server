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

              INSERT INTO library.media (product_id,author, description, publisher, publication_date, file_size, is_interactive, is_deleted) 
              VALUES ('${mediaData.product_id}','${mediaData.author}','${mediaData.description}',
              '${mediaData.publisher}', '${mediaData.publication_date}', '${mediaData.file_size}', ${mediaData.is_interactive},${is_deleted});

            `)

            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to add media data');
        }
    }
    static async updateMedia(data) {
        try {
           
            let result;
            const new_value = data.new_value;
            const column_name = data.column_name;
            const  product_id = data.product_id;
            console.log(typeof new_value);
            if(typeof new_value === 'string')
            {
               result = await pool.query(`
                   UPDATE library.media
                   SET ${column_name}='${new_value}'
                   WHERE product_id  = '${product_id}';
               `);
            }
            else
            {
               result = await pool.query(`
               UPDATE library.media
               SET ${column_name}=${new_value}
               WHERE product_id  = ${product_id};
               `);
            }
            console.log(`Media ${product_id} updated`);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to alter media.');
        }
    }
}

module.exports = {
    Media,
}