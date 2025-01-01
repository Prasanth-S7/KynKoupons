import 'package:flutter/material.dart';

class QuickActions extends StatelessWidget {
  const QuickActions({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 120,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: [
          _buildActionCard(
            context,
            'Rewards',
            Icons.card_giftcard,
            Colors.purple.shade100,
            () => Navigator.pushNamed(context, '/rewards'),
          ),
          _buildActionCard(
            context,
            'Events',
            Icons.event,
            Colors.blue.shade100,
            () => Navigator.pushNamed(context, '/events'),
          ),
          _buildActionCard(
            context,
            'Community',
            Icons.people,
            Colors.green.shade100,
            () => Navigator.pushNamed(context, '/community'),
          ),
        ],
      ),
    );
  }

  Widget _buildActionCard(BuildContext context, String title, IconData icon, 
      Color bgColor, VoidCallback onTap) {
    return Padding(
      padding: const EdgeInsets.only(right: 16),
      child: InkWell(
        onTap: onTap,
        child: Container(
          width: 100,
          decoration: BoxDecoration(
            color: bgColor,
            borderRadius: BorderRadius.circular(16),
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(icon, size: 32),
              const SizedBox(height: 8),
              Text(title, style: Theme.of(context).textTheme.bodyMedium),
            ],
          ),
        ),
      ),
    );
  }
}