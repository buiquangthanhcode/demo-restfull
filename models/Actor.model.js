import createPool from '../config/db.js';

const pool = createPool();

const ActorModel = {
    async getAllActors() {
        const [rows] = await pool.query('SELECT * FROM actor');
        return rows;
    },

    async getActorById(actorId) {
        const [rows] = await pool.query('SELECT * FROM actor WHERE actor_id = ?', [actorId]);
        if (rows.length === 0) {
            throw new Error('Không tìm thấy diễn viên với ID đã cung cấp');
        }
        return rows[0];
    },

    async createActor(first_name, last_name) {
        const [result] = await pool.query('INSERT INTO actor (first_name, last_name) VALUES (?, ?)', [
            first_name,
            last_name,
        ]);
        return { message: 'Diễn viên đã được thêm mới thành công', actorId: result.insertId };
    },

    async updateActor(actorId, first_name, last_name) {
        await pool.query('UPDATE actor SET first_name = ?, last_name = ? WHERE actor_id = ?', [
            first_name,
            last_name,
            actorId,
        ]);
        return { message: 'Thông tin diễn viên đã được cập nhật thành công' };
    },

    async deleteActor(actorId) {
        await pool.query('DELETE FROM actor WHERE actor_id = ?', [actorId]);
        return { message: 'Diễn viên đã được xoá thành công' };
    }
}

export default ActorModel;
