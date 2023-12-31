PGDMP         "    
        	    {            AloneStoreDB    14.5    14.5 K    F           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            G           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            H           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            I           1262    36911    AloneStoreDB    DATABASE     k   CREATE DATABASE "AloneStoreDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "AloneStoreDB";
                postgres    false            �            1259    37017    cart    TABLE     v   CREATE TABLE public.cart (
    id integer NOT NULL,
    user_id integer NOT NULL,
    total_price integer NOT NULL
);
    DROP TABLE public.cart;
       public         heap    postgres    false            �            1259    37029    cart_detail    TABLE     �   CREATE TABLE public.cart_detail (
    id integer NOT NULL,
    cart_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL,
    size character varying(2) NOT NULL,
    total_price integer NOT NULL
);
    DROP TABLE public.cart_detail;
       public         heap    postgres    false            �            1259    37028    cart_detail_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cart_detail_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.cart_detail_id_seq;
       public          postgres    false    226            J           0    0    cart_detail_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.cart_detail_id_seq OWNED BY public.cart_detail.id;
          public          postgres    false    225            �            1259    37016    cart_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cart_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.cart_id_seq;
       public          postgres    false    224            K           0    0    cart_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.cart_id_seq OWNED BY public.cart.id;
          public          postgres    false    223            �            1259    36965    category    TABLE     c   CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying(20) NOT NULL
);
    DROP TABLE public.category;
       public         heap    postgres    false            �            1259    36964    category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.category_id_seq;
       public          postgres    false    218            L           0    0    category_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;
          public          postgres    false    217            �            1259    36935    order_detail    TABLE     �   CREATE TABLE public.order_detail (
    id integer NOT NULL,
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer[] NOT NULL,
    size character varying(2),
    total_price integer NOT NULL
);
     DROP TABLE public.order_detail;
       public         heap    postgres    false            �            1259    36934    order_detail_id_seq    SEQUENCE     �   CREATE SEQUENCE public.order_detail_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.order_detail_id_seq;
       public          postgres    false    214            M           0    0    order_detail_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.order_detail_id_seq OWNED BY public.order_detail.id;
          public          postgres    false    213            �            1259    36913    orders    TABLE     b  CREATE TABLE public.orders (
    id integer NOT NULL,
    user_id integer NOT NULL,
    created_at date NOT NULL,
    modified_at date,
    address character varying(100) NOT NULL,
    total_price integer NOT NULL,
    full_name character varying(100) NOT NULL,
    phone_number character varying(15),
    status integer,
    "desc" character varying
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    36972    products    TABLE     
  CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    "desc" character varying(100) NOT NULL,
    category_id integer NOT NULL,
    price integer NOT NULL,
    main_img bytea,
    front_img bytea,
    back_img bytea
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    36971    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    220            N           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    219            �            1259    36991    quantity_product    TABLE       CREATE TABLE public.quantity_product (
    id integer NOT NULL,
    product_id integer NOT NULL,
    is_one_size boolean NOT NULL,
    quantity_total integer NOT NULL,
    quantity_s integer,
    quantity_m integer,
    quantity_l integer,
    quantity_xl integer
);
 $   DROP TABLE public.quantity_product;
       public         heap    postgres    false            �            1259    36990    quantity_product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.quantity_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.quantity_product_id_seq;
       public          postgres    false    222            O           0    0    quantity_product_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.quantity_product_id_seq OWNED BY public.quantity_product.id;
          public          postgres    false    221            �            1259    36949    status    TABLE     a   CREATE TABLE public.status (
    id integer NOT NULL,
    name character varying(10) NOT NULL
);
    DROP TABLE public.status;
       public         heap    postgres    false            �            1259    36948    status_id_seq    SEQUENCE     �   CREATE SEQUENCE public.status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.status_id_seq;
       public          postgres    false    216            P           0    0    status_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.status_id_seq OWNED BY public.status.id;
          public          postgres    false    215            �            1259    36922    user    TABLE     s  CREATE TABLE public."user" (
    id integer NOT NULL,
    login character varying(20) NOT NULL,
    password character varying(20) NOT NULL,
    phone_number character varying(15) NOT NULL,
    email character varying(50) NOT NULL,
    full_name character varying(100) NOT NULL,
    address character varying(100) NOT NULL,
    is_admin boolean DEFAULT false NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    36912    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    210            Q           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public.orders.id;
          public          postgres    false    209            �            1259    36921    user_id_seq1    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.user_id_seq1;
       public          postgres    false    212            R           0    0    user_id_seq1    SEQUENCE OWNED BY     >   ALTER SEQUENCE public.user_id_seq1 OWNED BY public."user".id;
          public          postgres    false    211            �           2604    37020    cart id    DEFAULT     b   ALTER TABLE ONLY public.cart ALTER COLUMN id SET DEFAULT nextval('public.cart_id_seq'::regclass);
 6   ALTER TABLE public.cart ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    224    224            �           2604    37032    cart_detail id    DEFAULT     p   ALTER TABLE ONLY public.cart_detail ALTER COLUMN id SET DEFAULT nextval('public.cart_detail_id_seq'::regclass);
 =   ALTER TABLE public.cart_detail ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    36968    category id    DEFAULT     j   ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);
 :   ALTER TABLE public.category ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            �           2604    36938    order_detail id    DEFAULT     r   ALTER TABLE ONLY public.order_detail ALTER COLUMN id SET DEFAULT nextval('public.order_detail_id_seq'::regclass);
 >   ALTER TABLE public.order_detail ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            �           2604    36916 	   orders id    DEFAULT     d   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            �           2604    36975    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            �           2604    36994    quantity_product id    DEFAULT     z   ALTER TABLE ONLY public.quantity_product ALTER COLUMN id SET DEFAULT nextval('public.quantity_product_id_seq'::regclass);
 B   ALTER TABLE public.quantity_product ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            �           2604    36952 	   status id    DEFAULT     f   ALTER TABLE ONLY public.status ALTER COLUMN id SET DEFAULT nextval('public.status_id_seq'::regclass);
 8   ALTER TABLE public.status ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �           2604    36925    user id    DEFAULT     e   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq1'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            A          0    37017    cart 
   TABLE DATA           8   COPY public.cart (id, user_id, total_price) FROM stdin;
    public          postgres    false    224   �T       C          0    37029    cart_detail 
   TABLE DATA           [   COPY public.cart_detail (id, cart_id, product_id, quantity, size, total_price) FROM stdin;
    public          postgres    false    226   �T       ;          0    36965    category 
   TABLE DATA           ,   COPY public.category (id, name) FROM stdin;
    public          postgres    false    218   �T       7          0    36935    order_detail 
   TABLE DATA           ]   COPY public.order_detail (id, order_id, product_id, quantity, size, total_price) FROM stdin;
    public          postgres    false    214   =U       3          0    36913    orders 
   TABLE DATA           �   COPY public.orders (id, user_id, created_at, modified_at, address, total_price, full_name, phone_number, status, "desc") FROM stdin;
    public          postgres    false    210   ZU       =          0    36972    products 
   TABLE DATA           g   COPY public.products (id, name, "desc", category_id, price, main_img, front_img, back_img) FROM stdin;
    public          postgres    false    220   �U       ?          0    36991    quantity_product 
   TABLE DATA           �   COPY public.quantity_product (id, product_id, is_one_size, quantity_total, quantity_s, quantity_m, quantity_l, quantity_xl) FROM stdin;
    public          postgres    false    222   �U       9          0    36949    status 
   TABLE DATA           *   COPY public.status (id, name) FROM stdin;
    public          postgres    false    216    V       5          0    36922    user 
   TABLE DATA           h   COPY public."user" (id, login, password, phone_number, email, full_name, address, is_admin) FROM stdin;
    public          postgres    false    212   :V       S           0    0    cart_detail_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.cart_detail_id_seq', 1, false);
          public          postgres    false    225            T           0    0    cart_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.cart_id_seq', 1, true);
          public          postgres    false    223            U           0    0    category_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.category_id_seq', 1, false);
          public          postgres    false    217            V           0    0    order_detail_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.order_detail_id_seq', 1, false);
          public          postgres    false    213            W           0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 1, false);
          public          postgres    false    219            X           0    0    quantity_product_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.quantity_product_id_seq', 1, false);
          public          postgres    false    221            Y           0    0    status_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.status_id_seq', 1, false);
          public          postgres    false    215            Z           0    0    user_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.user_id_seq', 1, false);
          public          postgres    false    209            [           0    0    user_id_seq1    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.user_id_seq1', 1, false);
          public          postgres    false    211            �           2606    37022    cart cart_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.cart DROP CONSTRAINT cart_pkey;
       public            postgres    false    224            �           2606    36970    category category_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.category DROP CONSTRAINT category_pkey;
       public            postgres    false    218            �           2606    36942    order_detail order_detail_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.order_detail
    ADD CONSTRAINT order_detail_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.order_detail DROP CONSTRAINT order_detail_pkey;
       public            postgres    false    214            �           2606    36979    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    220            �           2606    36996 &   quantity_product quantity_product_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.quantity_product
    ADD CONSTRAINT quantity_product_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.quantity_product DROP CONSTRAINT quantity_product_pkey;
       public            postgres    false    222            �           2606    36954    status status_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.status DROP CONSTRAINT status_pkey;
       public            postgres    false    216            �           2606    36920    orders user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.orders DROP CONSTRAINT user_pkey;
       public            postgres    false    210            �           2606    36928    user user_pkey1 
   CONSTRAINT     O   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey1 PRIMARY KEY (id);
 ;   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey1;
       public            postgres    false    212            �           2606    37033    cart_detail cart_id    FK CONSTRAINT     q   ALTER TABLE ONLY public.cart_detail
    ADD CONSTRAINT cart_id FOREIGN KEY (cart_id) REFERENCES public.cart(id);
 =   ALTER TABLE ONLY public.cart_detail DROP CONSTRAINT cart_id;
       public          postgres    false    226    224    3229            �           2606    36980    products category_id    FK CONSTRAINT     z   ALTER TABLE ONLY public.products
    ADD CONSTRAINT category_id FOREIGN KEY (category_id) REFERENCES public.category(id);
 >   ALTER TABLE ONLY public.products DROP CONSTRAINT category_id;
       public          postgres    false    220    3223    218            �           2606    36943    order_detail order_id    FK CONSTRAINT     v   ALTER TABLE ONLY public.order_detail
    ADD CONSTRAINT order_id FOREIGN KEY (order_id) REFERENCES public.orders(id);
 ?   ALTER TABLE ONLY public.order_detail DROP CONSTRAINT order_id;
       public          postgres    false    214    3215    210            �           2606    36985    order_detail product_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_detail
    ADD CONSTRAINT product_id FOREIGN KEY (product_id) REFERENCES public.products(id) NOT VALID;
 A   ALTER TABLE ONLY public.order_detail DROP CONSTRAINT product_id;
       public          postgres    false    3225    214    220            �           2606    36997    quantity_product product_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.quantity_product
    ADD CONSTRAINT product_id FOREIGN KEY (product_id) REFERENCES public.products(id);
 E   ALTER TABLE ONLY public.quantity_product DROP CONSTRAINT product_id;
       public          postgres    false    220    222    3225            �           2606    37038    cart_detail product_id    FK CONSTRAINT     {   ALTER TABLE ONLY public.cart_detail
    ADD CONSTRAINT product_id FOREIGN KEY (product_id) REFERENCES public.products(id);
 @   ALTER TABLE ONLY public.cart_detail DROP CONSTRAINT product_id;
       public          postgres    false    3225    226    220            �           2606    36955    orders status_id    FK CONSTRAINT     y   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT status_id FOREIGN KEY (status) REFERENCES public.status(id) NOT VALID;
 :   ALTER TABLE ONLY public.orders DROP CONSTRAINT status_id;
       public          postgres    false    210    216    3221            �           2606    36929    orders user_id    FK CONSTRAINT     x   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public."user"(id) NOT VALID;
 8   ALTER TABLE ONLY public.orders DROP CONSTRAINT user_id;
       public          postgres    false    3217    212    210            �           2606    37023    cart user_id    FK CONSTRAINT     l   ALTER TABLE ONLY public.cart
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public."user"(id);
 6   ALTER TABLE ONLY public.cart DROP CONSTRAINT user_id;
       public          postgres    false    212    224    3217            A      x�3�4�4����� �X      C      x������ � �      ;   >   x�3��-��,*���2�H�+)�2����O�L�2�tN,�2���O-�2�tJL����� ��=      7      x������ � �      3   )   x�3�4�4202�50�52@f��䀤1��)W� �W�      =   @   x�3��-��,*Q�/�,����LNU�	��)��V*$�(�g�p�rp��AW� Җ5      ?      x������ � �      9   *   x�3�L.JM,IM�2�LI��,K-��2�L��/���qqq ��
+      5   x   x�ǽ�  ��x�5�MI���������R�\�\R*V�^��3P�໮e؍sn�u����W�ǉ8����� IJ���L�$_yp�2�[�%���Ƴ<e�G��шV㾇E�[��E#�     