import os
from PIL import Image
import psycopg2

# def get_binary_array(path):
#     with open(path, "rb") as image:
#         f = image.read()
#         b = bytes(f).hex()
#         return b

# def send_files_to_postgresql(connection, cursor, file_names):
#     query = "INSERT INTO table(image) VALUES (decode(%s, 'hex'))"
#     mylist = []
#     for file_name in file_names:
#         mylist.append(get_binary_array(file_name))

#     try:
#         cursor.executemany(query, mylist)
       
#         connection.commit()  # commit the changes to the database is advised for big files, see documentation
#         count = cursor.rowcount # check that the images were all successfully added
#         print (count, "Records inserted successfully into table")
#     except (Exception, psycopg2.DatabaseError) as error:
#         print(error)

# def get_connection_cursor_tuple():
#     connection = None
#     try:
#         params = 'postgresql://postgres:ktjz3824@localhost:5432/pictures'
#         print('Connecting to the PostgreSQL database...')
#         connection = psycopg2.connect(**params)
#         cursor = connection.cursor()
#     except (Exception, psycopg2.DatabaseError) as error:
#         print(error)

#     return connection, cursor

# connection, cursor = get_connection_cursor_tuple()
img_names = []
img_heights = []
img_widths=[]
img_types=[]
img_rnames =[]
# C:\Users\joshu\Documents\Documents\GitHub\website\joshua-zhou14.github.io\frontend\src\images
# directory = os.fsencode('c:/Users/joshu/Documents/Documents/picture')
directory = os.fsencode('C:/Users/joshu/Documents/Documents/GitHub/website/joshua-zhou14.github.io/frontend/src/images')
for file in os.listdir(directory):
    filename = os.fsdecode(file)
    if filename.endswith('.jpg'):
        filename2 = Image.open('C:/Users/joshu/Documents/Documents/GitHub/website/joshua-zhou14.github.io/frontend/src/images/' + filename)
        img_names.append('C:/Users/joshu/Documents/Documents/GitHub/website/joshua-zhou14.github.io/frontend/src/images/' + filename)
        img_widths.append(filename2.width)
        img_heights.append(filename2.height)
        # arr = filename.split("_")
        # img_types.append(arr[1])
        # arr2 = arr[0].split("&")
        # rName = ""
        # for i in arr2:
        #     rName += i + " "
        # img_rnames.append(rName.rstrip())
        print(filename + " " + str(filename2.width) + " " + str(filename2.height))

# send_files_to_postgresql(connection, cursor, img_names)