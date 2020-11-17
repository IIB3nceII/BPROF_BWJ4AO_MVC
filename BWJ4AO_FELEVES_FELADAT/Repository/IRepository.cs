using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository
{
      public interface IRepository<T> where T : new()
      {
            void AddNewItem(T item);
            void Delete(T item);
            void Delete(int number);
            T FindOne(int number);
            IQueryable<T> ListAll();
            void UpdateData(int number, T item);
            void SaveAll();
      }
}
