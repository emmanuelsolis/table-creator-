lista = ["ABC Mite", "Alga Pro", "Antiheladas", "Bio Nc", "Boro", "Crecimiento Piña", "Desarrollo Agave", 
         "Double Up", "Ecdown", "Ecell Power", "Endgaru", "Eunchonigee", "Gear 10", "Jd 150", "Kkakttuk", 
         "Llenado", "Maíz vegetativo", "Meta Mix", "Mesona Intro", "Mite Kill", "Multi Meta", "Nit Ice Free", 
         "Nobug", "Nobug Plus", "Nopm", "Pestop", "Potasio Down Boost", "Power Clean", "Rhizo Agard", 
         "Strepto Stop", "Sunaider", "Terra Grain", "Terra Soil", "Terragard Gold", "Terragreen", "TK Amin 85", 
         "TK Enhancer Max", "Tk-Nemakill", "Bróta Zinc 19", "Movable Calcio 11 Boro 2.1", "Movable Calcio 18"]

# Ordenar la lista alfabéticamente
lista.sort()

# Recorrer la lista ordenada e imprimir cada elemento con comillas y sin espacios
for nombre in lista:
    print(f'"{nombre}"', end=", ")
