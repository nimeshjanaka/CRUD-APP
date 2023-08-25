import create from 'zustand';

const useDataStore = create((set) => ({
  data: JSON.parse(localStorage.getItem('data')) || [],
  addData: (inputData) => {
    set((state) => {
      const newData = [...state.data, inputData];
      localStorage.setItem('data', JSON.stringify(newData));
      return { data: newData };
    });
  },
  updateData: (index, newData) => {
    set((state) => {
      const updatedData = state.data.map((item, i) => (i === index ? newData : item));
      localStorage.setItem('data', JSON.stringify(updatedData));
      return { data: updatedData };
    });
  },
  deleteData: (index) => {
    set((state) => {
      const updatedData = state.data.filter((_, i) => i !== index);
      localStorage.setItem('data', JSON.stringify(updatedData));
      return { data: updatedData };
    });
  },
}));

export default useDataStore;
