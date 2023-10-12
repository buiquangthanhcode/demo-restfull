import ActorModel from '../models/Actor.model.js';

export const getAllActors = async (req, res) => {
    try {
        const actors = await ActorModel.getAllActors();
        res.json(actors);
    } catch (error) {
        console.error('Lỗi khi lấy danh sách diễn viên:', error);
        res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
    }
};

export const getActorById = async (req, res) => {
    const actorId = req.params.id;
    try {
        const actor = await ActorModel.getActorById(actorId);
        res.json(actor);
    } catch (error) {
        console.error('Lỗi khi lấy thông tin diễn viên:', error);
        res.status(404).json({ error: error.message });
    }
};

export const createActor = async (req, res) => {
    const { first_name, last_name } = req.body;
    try {
        const result = await ActorModel.createActor(first_name, last_name);
        res.json(result);
    } catch (error) {
        console.error('Lỗi khi thêm mới diễn viên:', error);
        res.status(500).json({ error: 'Lỗi khi thêm mới diễn viên' });
    }
};

export const updateActor = async (req, res) => {
    const actorId = req.params.id;
    const { first_name, last_name } = req.body;
    try {
        const result = await ActorModel.updateActor(actorId, first_name, last_name);
        res.json(result);
    } catch (error) {
        console.error('Lỗi khi cập nhật diễn viên:', error);
        res.status(500).json({ error: 'Lỗi khi cập nhật diễn viên' });
    }
};

export const deleteActor = async (req, res) => {
    const actorId = req.params.id;
    try {
        const result = await ActorModel.deleteActor(actorId);
        res.json(result);
    } catch (error) {
        console.error('Lỗi khi xoá diễn viên:', error);
        res.status(500).json({ error: 'Lỗi khi xoá diễn viên' });
    }
};
