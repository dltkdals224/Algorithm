def solution(sequence, k):
    length = len(sequence)
    for i in reversed(range(length)):
        sum_of_num = sequence[i]
        for j in reversed(range(i)):
            if sequence[i] == k:
                return [i,i]
            if sequence[i] > k:
                break
            if sequence[i] < k:
                sum_of_num += sequence[j]
                if sum_of_num == k:
                    if j > 0 and sequence[j-1] == sequence[j]:
                        break
                    else:
                        return [j,i]
                if sum_of_num > k:
                    break
                if sum_of_num < k:
                    continue
    
print(solution([1, 2, 3, 4, 5], 7))
print(solution([1, 1, 1, 2, 3, 4, 5], 5))
print(solution([2, 2, 2, 2, 2], 6))