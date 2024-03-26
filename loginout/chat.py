# 将时间转换为24小时制
andrew_free = [(11, 15)]
joanne_free = [(12, 14), (15.5, 17)]
hannah_free = [(12, 12.5), (16, 18)]

# 找出所有人都有空的时间段
common_free = []
for a_start, a_end in andrew_free:
    for j_start, j_end in joanne_free:
        for h_start, h_end in hannah_free:
            start = max(a_start, j_start, h_start)
            end = min(a_end, j_end, h_end)
            if end - start >= 0.5:  # 至少有30分钟
                common_free.append((start, end))

common_free