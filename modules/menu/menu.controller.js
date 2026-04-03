import * as service from './menu.service.js'

export const getAll = async (req, res) => {
  const data = await service.getMenus()
  res.json(data)
}

export const getById = async (req, res) => {
  const data = await service.getMenu(req.params.id)
  res.json(data)
}

export const create = async (req, res) => {
  await service.addMenu(req.body)
  res.json({ message: 'Berhasil tambah menu' })
}

export const update = async (req, res) => {
  await service.editMenu(req.params.id, req.body)
  res.json({ message: 'Berhasil update menu' })
}

export const remove = async (req, res) => {
  await service.removeMenu(req.params.id)
  res.json({ message: 'Berhasil hapus menu' })
}

const getMenuById = async (req, res) => {
  try {
    const data = await menuService.getById(req.params.id);
    res.json(data); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};