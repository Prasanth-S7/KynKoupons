import 'package:flutter/material.dart';

class HomeProvider with ChangeNotifier {
  double _creditLimit = 231.00;
  List<Brand> _topBrands = [
    Brand('Nike', 'assets/brands/nike.png'),
    Brand("Macy's", 'assets/brands/macys.png'),
    Brand("Levi's", 'assets/brands/levis.png'),
    Brand('Adidas', 'assets/brands/adidas.png'),
    Brand('Chanel', 'assets/brands/chanel.png'),
    Brand('Pepsi', 'assets/brands/pepsi.png'),
    Brand('Starbucks', 'assets/brands/starbucks.png'),
    Brand('Puma', 'assets/brands/puma.png'),
    Brand('Ferrari', 'assets/brands/ferrari.png'),
    Brand('Dell', 'assets/brands/dell.png'),
  ];

  double get creditLimit => _creditLimit;
  List<Brand> get topBrands => _topBrands;
}

class Brand {
  final String name;
  final String logoPath;

  Brand(this.name, this.logoPath);
}