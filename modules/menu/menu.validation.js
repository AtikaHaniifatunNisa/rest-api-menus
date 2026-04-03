export const validateMenu = (data) => {
  if (!data.name || !data.price) {
    throw new Error('Name dan price wajib diisi')
  }
}