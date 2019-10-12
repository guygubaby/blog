# learn pandas

> [https://github.com/guipsamora/pandas_exercises](https://github.com/guipsamora/pandas_exercises)


- Ex2 - Getting and Knowing your Data

```python
import pandas as pd
import numpy as np

url = 'https://raw.githubusercontent.com/justmarkham/DAT8/master/data/chipotle.tsv'
chipo = df.read_csv(url,sep='\t')

print(chipo.index)

'''
Int64Index([   0,    1,    2,    3,    4,    5,    6,    7,    8,    9,
            ...
            4612, 4613, 4614, 4615, 4616, 4617, 4618, 4619, 4620, 4621],
           dtype='int64', length=4622)
'''

print(chipo.head())

'''

   order_id  ...  item_price
0         1  ...      $2.39 
1         1  ...      $3.39 
2         1  ...      $3.39 
3         1  ...      $2.39 
4         2  ...     $16.98 

'''

print(chipo.columns)

'''
Index(['order_id', 'quantity', 'item_name', 'choice_description',
       'item_price'],
      dtype='object')
'''

print(chipo.groupby('item_name').mean())

'''
Veggie Burrito                          852.231579  1.021053
Veggie Crispy Tacos                     668.000000  1.000000
Veggie Salad                           1210.833333  1.000000
Veggie Salad Bowl                       961.277778  1.000000
Veggie Soft Tacos                       788.571429  1.142857
...

'''

c = chipo.groupby('item_name')
c = c.sum()
c = c.sort_values(['quantity'],ascending=False)
print(c.head())

'''
                     order_id  quantity
item_name                              
Chicken Bowl           713926       761
Chicken Burrito        497303       591
Chips and Guacamole    449959       506
Steak Burrito          328437       386
Canned Soft Drink      304753       351
'''

chipo.item_price = chipo.item_price.apply(lambda x: float(x[1:-1]))

print(chipo.head())

print(chipo.item_price.dtype)

'''
4         2  ...     $16.98 

[5 rows x 5 columns]
  order_id  ...  item_price
0         1  ...        2.39

float64
'''

print(chipo.item_name.value_counts().count())

# 50

```

- groupby image

![groupby](/blog/images/python/pandas/pandas_groupby.webp)

- Ex3 - Getting and Knowing your Data

```py
import pandas as pd

users = pd.read_table('https://raw.githubusercontent.com/justmarkham/DAT8/master/data/u.user',sep='|',index_col='user_id')
print(users.head(20))
# first 20
'''
         age gender     occupation zip_code
user_id                                    
1         24      M     technician    85711
2         53      F          other    94043
3         23      M         writer    32067
...
'''

print(users.tail(5))
# last 5

count = users.shape[0]
# 943

print(users.columns)
'''
Index(['age', 'gender', 'occupation', 'zip_code'], dtype='object')
'''
users.dtypes
'''
age            int64
gender        object
occupation    object
zip_code      object
dtype: object
'''

# Print only the occupation column
users.occupation 
#OR
users['occupation']

# How many different occupations there are in this dataset?
users.occupation.nunique()
# 21


print(users.occupation.unique())
'''
['technician' 'other' 'writer' 'executive' 'administrator' 'student'
 'lawyer' 'educator' 'scientist' 'entertainment' 'programmer' 'librarian'
 'homemaker' 'artist' 'engineer' 'marketing' 'none' 'healthcare' 'retired'
 'salesman' 'doctor']
 '''
 print(users.occupation.value_counts())
 '''
 student          196
other            105
educator          95
...
doctor             7
Name: occupation, dtype: int64
'''

# Summarize the DataFrame.
users.describe() #Notice: By default, only the numeric columns are returned. 
'''
              age
count  943.000000
mean    34.051962
std     12.192740
min      7.000000
25%     25.000000
50%     31.000000
75%     43.000000
max     73.000000
'''

# Summarize all the columns
users.describe(include = "all") #Notice: By default, only the numeric columns are returned.
'''
               age gender occupation zip_code
count   943.000000    943        943      943
unique         NaN      2         21      795
top            NaN      M    student    55414
freq           NaN    670        196        9
mean     34.051962    NaN        NaN      NaN
std      12.192740    NaN        NaN      NaN
min       7.000000    NaN        NaN      NaN
25%      25.000000    NaN        NaN      NaN
50%      31.000000    NaN        NaN      NaN
75%      43.000000    NaN        NaN      NaN
max      73.000000    NaN        NaN      NaN
'''
# Summarize only the occupation column
users.occupation.describe()

# What is the mean age of users?
round(users.age.mean())

# 查看 occupation 中有哪些不同的值，并计算每个值有多少个重复值
users.occupation.value_counts()
'''
student          196
other            105
educator          95
administrator     79
engineer          67
programmer        66
librarian         51
writer            45
executive         32
scientist         31
artist            28
technician        27
marketing         26
entertainment     18
healthcare        16
retired           14
lawyer            12
salesman          12
none               9
homemaker          7
doctor             7
Name: occupation, dtype: int64
'''
```

- next 01_... > World Food Facts

[World Food Facts](https://github.com/guipsamora/pandas_exercises/blob/master/01_Getting_%26_Knowing_Your_Data/World%20Food%20Facts/Exercises_with_solutions.ipynb)