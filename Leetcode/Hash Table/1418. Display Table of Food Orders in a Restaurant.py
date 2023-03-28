# 2023.03.28
from collections import defaultdict

class Solution(object):
    def displayTable(self, orders):
        ans_arr = []

        order_list = defaultdict(list)
        total_food = []

        for order in orders:
            order_list[order[1]].append(order[2])
            if(order[2] not in total_food):
                total_food.append(order[2])

        order_list = dict(sorted(order_list.items(), key=lambda x: int(x[0])))
        total_food.sort()
        total_food.insert(0,'Table')

        ans_arr.append(total_food)

        tmp = [0] * len(total_food)
        for table in order_list:
            tmp[0] = int(table)
            for order in order_list[table]:
                tmp[total_food.index(order)] += 1

            ans_arr.append(list(map(str, tmp)))
            tmp = [0] * len(total_food)

        return ans_arr

sol = Solution()        
sol.displayTable([["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]])
