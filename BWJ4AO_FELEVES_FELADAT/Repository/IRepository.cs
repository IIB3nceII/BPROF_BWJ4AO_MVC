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
            void Delete(string st);
            T FindOne(string st);
            IQueryable<T> ListAll();
            void UpdateData(string st, T item);
            void SaveAll();
      }
}
