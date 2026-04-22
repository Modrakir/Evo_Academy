import { Component } from '@angular/core';

interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'lib-my-lib',
  imports: [],
  template: ` <h3>Список пользователей</h3>
    <table class="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Имя</th>
          <th>Email</th>
          <th>Роль</th>
        </tr>
      </thead>
      <tbody>
        @for (user of users; track user.id) {
          <tr>
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
          </tr>
        } @empty {
          <tr>
            <td colspan="4" style="text-align: center;">Данные отсутствуют</td>
          </tr>
        }
      </tbody>
    </table> `,
  styles: ``,
})
export class MyLib {
  
    users: UserData[] = [
    { id: 1, name: 'Алексей Смирнов', email: 'a.smirnov@example.com', role: 'Администратор' },
    { id: 2, name: 'Мария Иванова', email: 'm.ivanova@example.com', role: 'Директор' },
    { id: 3, name: 'Дмитрий Петров', email: 'd.petrov@example.com', role: 'Пользователь' },
    { id: 4, name: 'Елена Козлова', email: 'e.kozlova@example.com', role: 'Менеджер' }
  ];
}
