import { Component } from '@angular/core';

type StoreStat = {
  value: string;
  label: string;
};

type Collection = {
  name: string;
  badge: string;
  description: string;
};

type Benefit = {
  title: string;
  description: string;
};

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly stats: StoreStat[] = [
    { value: '5K+', label: 'runner đã ghé shop' },
    { value: '48h', label: 'giao nhanh tại thành phố lớn' },
    { value: '30+', label: 'mẫu giày cho daily run đến race day' }
  ];

  protected readonly collections: Collection[] = [
    {
      name: 'Daily Run',
      badge: 'Êm và ổn định',
      description: 'Phù hợp cho những buổi chạy hằng ngày, dễ làm quen và bền cho người mới bắt đầu.'
    },
    {
      name: 'Tempo Session',
      badge: 'Nhẹ và bật',
      description: 'Dành cho bài pace, interval hoặc runner muốn cảm giác phản hồi tốt hơn khi tăng tốc.'
    },
    {
      name: 'Long Run',
      badge: 'Thoải mái cuối tuần',
      description: 'Đệm dày hơn, giữ chân ổn định và giảm mỏi trong các buổi chạy dài hoặc recovery run.'
    }
  ];

  protected readonly benefits: Benefit[] = [
    {
      title: 'Tư vấn theo mục tiêu chạy',
      description: 'Shop gợi ý giày theo pace, cự ly và thói quen tập luyện thay vì chỉ chọn theo mẫu đẹp.'
    },
    {
      title: 'Form chân dễ thử, size dễ đổi',
      description: 'Hỗ trợ chọn size nhanh và đổi size nếu mang chưa vừa trong lần đầu nhận hàng.'
    },
    {
      title: 'Set up đơn giản cho người mới',
      description: 'Chỉ cần một đôi giày phù hợp là bạn có thể bắt đầu lịch chạy nhẹ nhàng và an toàn hơn.'
    }
  ];
}
